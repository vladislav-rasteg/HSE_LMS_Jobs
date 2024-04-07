import s from './CreateJobModal.module.scss'
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
}

const CreateJobModal = ({show, name, setShow}: ModalProps) => {
    return (
        <Modal show={show} name={name} setShow={setShow}>
            <ModalContent height="60vh" width="448px">
                <div className={s.modal_body}>
                    
                   <div className={s.input_group}>
                        <p className={s.title}>Название</p>
                        <input placeholder='Укажите название вакансии' type='text'/>
                   </div>

                   <div className={s.input_group}>
                        <p className={s.title}>Зарплата от</p>
                        <input placeholder='Зарплата от' type='number'/>
                   </div>

                   <div className={s.input_group}>
                        <p className={s.title}>Компания</p>
                        <select>
                            <option value="Контур">Контур</option>
                            <option value="МТС">МТС</option>
                        </select>
                   </div>

                   <div className={s.input_group}>
                        <p className={s.title}>опыт работы</p>
                        <select>
                            <option value="Контур">Без опыта работы</option>
                            <option value="МТС">От 1 года</option>
                            <option value="МТС">От 3 до 6 лет</option>
                            <option value="МТС">Более 6 лет</option>
                        </select>
                   </div>

                   <div className={s.input_group}>
                        <p className={s.title}>Регион</p>
                        <select>
                            <option value="Контур">Удаленно</option>
                            <option value="МТС">Пермь</option>
                            <option value="МТС">Москва</option>
                            <option value="МТС">Владивосток</option>
                        </select>
                   </div>

                   <div className={s.input_group}>
                        <p className={s.title}>Направления студентов</p>
                        <select>
                            <option value="Контур">Бизнес-информатика</option>
                            <option value="МТС">Программная инжинерия</option>
                        </select>
                   </div>

                   <div className={s.input_group}>
                        <p className={s.title}>Telegram HR-специалиста</p>
                        <input placeholder='Укажите telegram HR-специалиста' type='text'/>
                   </div>

                   <div className={s.input_group}>
                        <p className={s.title}>Почта HR-специалиста</p>
                        <input placeholder='Укажите почту HR-специалиста' type='text'/>
                   </div>

                   <div className={s.input_group}>
                        <p className={s.title}>Телефон HR-специалиста</p>
                        <input placeholder='Укажите телефон HR-специалиста' type='text'/>
                   </div>

                   <div className={s.input_group}>
                        <p className={s.title}>Описание</p>
                        <textarea placeholder='Добавьте описание вакансии'/>
                   </div>

                </div>
            </ModalContent>
            <ModalFooter>
                <Button theme="border" size="big" onClick={() => setShow(!show)} fullWidth>Закрыть</Button>
                <Button size="big" onClick={() => setShow(!show)} fullWidth>Создать</Button>
            </ModalFooter>
        </Modal>
    )
}

export default CreateJobModal