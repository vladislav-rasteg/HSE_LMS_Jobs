import React, { useState } from "react";
import s from "./Jobs.module.scss";
import { classNames } from "../../../shared/lib/classNames/classNames";
import HotIcon from "@assets/icons/hot.svg"
import { JobCard } from "../../../components/JobCard/ui/JobCard";
import { JobsList } from "./JobsMockData";
import JobModal from "../../../components/JobModal/JobModal";
import { Button } from "../../../shared/Button";
import CreateJobModal from "../../../components/CreateJobModal/CreateJobModal";


export interface iJob{
    name: string;
    description: string;
    salary: number;
    company: string;
    region: string;
    experience: string;
    hr_tg: string;
    hr_mail: string;
    hr_phone: string;
    is_trainee: boolean;
}

export const Jobs = () => {
  
const [filterJobs, setFilterJobs] = useState(true);
const [filterTrainee, setFilterTrainee] = useState(true);
const [filterFullTime, setFilterFullTime] = useState(true);
const [filterPartTime, setFilterPartTime] = useState(true);
const [filterSalaryFrom, setFilterSalaryFrom] = useState(0);
const [filterSalaryTo, setFilterSalaryTo] = useState(100000);

const [selectedJob, setSelectedJob] = useState<iJob>()
const [showJobModal, setShowJobModal] = useState(false);

const [showCreateJobModal, setShowCreateJobModal] = useState(false);

const handleFilterSalary = (type: string, text: string  ) => {
    const reg = new RegExp('^[0-9]*$')
    if(reg.test(text)){
        if (type === 'from') {
            setFilterSalaryFrom(Number(text))
        }
        if (type === 'to') {
            setFilterSalaryTo(Number(text))
        } 
    } 
}

const handleSelectJob = (job: iJob) => {
    setSelectedJob(job)
    setShowJobModal(true)
}

return(
    <div className="page">
        
        {showJobModal && <JobModal name={'О вакансии'} setShow={setShowJobModal} show={showJobModal} job={selectedJob} />}
        {showCreateJobModal && <CreateJobModal name={'Создание вакансии'} setShow={setShowCreateJobModal} show={showCreateJobModal} />}

        <div className={s.page_heading}>
            <h1>Актуальные вакансии</h1>
            <Button onClick={() => setShowCreateJobModal(true)}>Добавить вакансию</Button>
        </div>
      
        <div className={s.jobs_filter}>
            <div className={s.group}>
                <p className={s.group_name}>
                    Тип вакансии
                </p>
                <div className={s.filter_group}>
                    <a className={classNames(s.filter_check, {[s.active]: filterJobs})} onClick={() => setFilterJobs(!filterJobs)}>
                        Работа
                    </a>
                    <a className={classNames(s.filter_check, {[s.active]: filterTrainee})} onClick={() => setFilterTrainee(!filterTrainee)}>
                        Стажировка
                    </a>
                </div>
            </div>
            <div className={s.group}>
                <p className={s.group_name}>
                    Занятость
                </p>
                <div className={s.filter_group}>
                    <a className={classNames(s.filter_check, {[s.active]: filterFullTime})} onClick={() => setFilterFullTime(!filterFullTime)}>
                        Полная
                    </a>
                    <a className={classNames(s.filter_check, {[s.active]: filterPartTime})} onClick={() => setFilterPartTime(!filterPartTime)}>
                        Частичная
                    </a>
                </div>
            </div>
            <div className={s.group}>
                <p className={s.group_name}>
                    зарплата
                </p>
                <div className={s.filter_group}>
                    от
                    <input placeholder="0" type="text" value={filterSalaryFrom} onChange={(e) => {handleFilterSalary('from', e.target.value)}}/>
                    до
                    <input placeholder="10 000" type="text" value={filterSalaryTo} onChange={(e) => {handleFilterSalary('to', e.target.value)}}/>
                </div>
            </div>
        </div>

        <div className={s.hot_jobs}>
            <div className={s.label}>
                <img src={HotIcon} />
                Горящие вакансии
            </div>
            <div className={s.jobs_grid}>
                {
                    JobsList.hot.length && JobsList.hot.map((job: iJob) => {
                        if(job.salary >= filterSalaryFrom && job.salary <= filterSalaryTo){
                            if(filterJobs && !job.is_trainee){
                                return(<JobCard theme="contrast" data={job} onClick={handleSelectJob} />)
                            }
                            if(filterTrainee && job.is_trainee){
                                return(<JobCard theme="contrast" data={job} onClick={handleSelectJob} />)
                            }
                        }
                    })
                }
            </div>
        </div>

        {
            filterTrainee && 
                <div className={s.section}>
                    <h2>Вакансии для стажировок</h2>
                    <div className={s.jobs_grid}>
                    {
                        JobsList.trainee.length && JobsList.trainee.map((job: iJob) => {
                            if(job.salary >= filterSalaryFrom && job.salary <= filterSalaryTo){
                                return(<JobCard data={job} onClick={handleSelectJob} />)
                            }
                        })
                    }
                    </div>
                </div>
        }

        {
            filterJobs && 
                <div className={s.section}>
                    <h2>Вакансии для работы</h2>
                    <div className={s.jobs_grid}>
                    {
                        JobsList.job.length && JobsList.job.map((job: iJob) => {
                            if(job.salary >= filterSalaryFrom && job.salary <= filterSalaryTo){
                                return(<JobCard data={job} onClick={handleSelectJob} />)
                            }
                        })
                    }
                    </div>
                </div>
        }
    </div>
 )
}
