
const JobDescriptionTab = ({ job }: any) => {
    const currencyFormat = new Intl.NumberFormat("en-Us");
    return (
        <div className="text-gray-500 text-base flex flex-col gap-4 h-[150px] overflow-y-auto pb-4">
            <div>
                <h2 className="font-bold text-black mb-2">Job Description</h2>
                <div>{job?.job_description}</div>
            </div>
            <div>
                <h2 className="font-bold text-black mb-2">Job Experience</h2>
                <div>{job?.experience} years working experience</div>
            </div>
            <div>
                <h2 className="font-bold text-black mb-2">Skills</h2>
                <div className="flex gap-3 flex-wrap">{JSON.parse(job?.job_required_skills).map((skill: string) => <div className="bg-blue-100 rounded-lg text-blue-600 py-1 px-3">{skill}</div>)}</div>
            </div>
            <div>
                <h2 className="font-bold text-black mb-2">Salary Expectation</h2>
                <div>{job?.job_salary_currency} {currencyFormat.format(job?.job_min_salary)} - {currencyFormat.format(job?.job_max_salary)}</div>
            </div>
        </div>
    )
}

export default JobDescriptionTab