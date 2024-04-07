import s from './JobModal.module.scss'
import { Button } from "../../shared/Button";
import { iJob } from '../../pages/Jobs/ui/Jobs';
import LocationIcon from "@assets/icons/location.svg"
import ExperienceIcon from "@assets/icons/experience.svg"
import Modal from '../Modal/Modal';
import ModalContent from '../Modal/ModalContent';
import ModalFooter from '../Modal/ModalFooter';

interface ModalProps {
    show: boolean;
    name: string;
    setShow: any;
    job: any;
}

const JobModal = ({show, name, setShow, job}: ModalProps) => {
    return (
        <Modal show={show} name={name} setShow={setShow}>
            <ModalContent height="80vh" width="800px">
                <div className={s.modal_body}>
                    
                   <div className={s.job_block}>
                        <p className={s.company}>{job.is_trainee ? "Стажировка" : "Работа"} в {job.company}</p>
                        <h1>{job.name}</h1>
                        {
                            job.salary > 0 ?
                                <p className={s.salary}>
                                    от {job.salary} ₽
                                </p>
                            :
                                <p className={s.salary}>
                                    Не оплачивается
                                </p>
                        }
                        <div className={s.points_info}>
                            <div className={s.point_info}>
                                <img src={LocationIcon}/>
                                <p>{job.region}</p>
                            </div>
                            <div className={s.point_info}>
                                <img src={ExperienceIcon}/>
                                <p>Опыт {job.experience}</p>
                            </div>
                        </div>
                   </div>

                    <h2>О вакансии</h2>
                   <p className={s.description}>
                        {job.description}
                   </p>
                   
                   <h2>Контакты HR</h2>
                   <div className={s.contacts}>
                        {
                            job.hr_tg &&
                            <p>
                                Telegram: <a href={job.hr_tg} target="_blank">job.hr_tg</a>
                            </p>
                        }
                        {
                            job.hr_mail &&
                            <p>
                                Почта: {job.hr_mail}
                            </p>
                        }
                        {
                            job.hr_phone &&
                            <p>
                                Почта: {job.hr_phone}
                            </p>
                        }
                   </div>

                </div>
            </ModalContent>
            <ModalFooter>
                <Button theme="border" size="big" onClick={() => setShow(!show)} fullWidth>Закрыть</Button>
            </ModalFooter>
        </Modal>
    )
}

export default JobModal