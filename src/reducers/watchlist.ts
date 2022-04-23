import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loadFilms } from 'api/films'
import { AppState } from 'app/store'
import { FilmCardProps } from 'components/FilmCard/FilmCard'

export interface WatchlistState {
  list: FilmCardProps[]
  loading: boolean
  error: string
}

const initialState: WatchlistState = {
  list: [],
  loading: false,
  error: '',
}

export const addFilmToWatchlist = createAsyncThunk(
  'watchlist/addFilm',
  async (filmId: string) => {
    const foundFilms = await loadFilms({ id: filmId.toString() })
    return foundFilms[0]
  }
)

export const watchlist = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    removeFilmFromWatchlist: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((film) => film.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addFilmToWatchlist.pending, (state) => {
        state.loading = true
      })
      .addCase(
        addFilmToWatchlist.fulfilled,
        (state, action: PayloadAction<Pick<FilmCardProps, 'id'>>) => {
          state.loading = false
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          state.list.push(action.payload)
        }
      )
      .addCase(addFilmToWatchlist.rejected, (state, action: any) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { removeFilmFromWatchlist } = watchlist.actions

export const currentWatchlist = (state: AppState) => state.watchlist.list

export default watchlist.reducer
