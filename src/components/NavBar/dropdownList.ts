import homePic from 'resources/icons/home.svg'
import homeFillPic from 'resources/icons/homeFill.svg'
import videoPic from 'resources/icons/video.svg'
import videoFillPic from 'resources/icons/videoFill.svg'
import ticketPic from 'resources/icons/ticket.svg'
import ticketFillPic from 'resources/icons/ticketFill.svg'
import folderPic from 'resources/icons/folder.svg'
import folderFillPic from 'resources/icons/folderFill.svg'
import playPic from 'resources/icons/play.svg'
import playFillPic from 'resources/icons/playFill.svg'
import documentPic from 'resources/icons/document.svg'
import documentFillPic from 'resources/icons/documentFill.svg'

export const dropdownList = [
  { href: '/', title: 'Главная', icon: homePic, iconFill: homeFillPic },
  {
    href: '/hd',
    title: 'Онлайн-кинотеатр',
    icon: videoPic,
    iconFill: videoFillPic,
  },
  {
    href: '/movies',
    title: 'Фильмы',
    icon: ticketPic,
    iconFill: ticketFillPic,
  },
  {
    href: '/serials',
    title: 'Сериалы',
    icon: folderPic,
    iconFill: folderFillPic,
  },
  {
    href: '/tv',
    title: 'Установить на ТВ',
    icon: playPic,
    iconFill: playFillPic,
  },
  {
    href: '/media',
    title: 'Медиа',
    icon: documentPic,
    iconFill: documentFillPic,
  },
]
