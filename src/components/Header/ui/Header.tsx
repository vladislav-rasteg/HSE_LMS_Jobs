import s from "./Header.module.scss"
import LogoImage from "@assets/logo.jpg"
import NotificationsIcon from "@assets/icons/notifications.svg"
import MessageIcon from "@assets/icons/message.svg"
import InboxIcon from "@assets/icons/inbox.svg"

export const Header = () => {
  
  return(
    <div className={s.header}>
        <div className={s.side_content}>
            <img className={s.logo} src={LogoImage} />
            <div className={s.links}>
                <a>В начало</a>
                <a>Личный кабинет</a>
                <a>Мои курсы</a>
                <a className={s.active}>Вакансии</a>
            </div>
        </div>
        
        <div className={s.additional}>
            <img src={NotificationsIcon} />
            <img src={MessageIcon} />
            <img src={InboxIcon} />
        </div>
    </div>
 )
}
