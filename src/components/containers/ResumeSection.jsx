import EducationTimeline from "./EducationTimeline";
import JobTimeline from "./JobTimeline";

const ResumeSection = () => {
    return (
        <div className="grid grid-cols-1 gap-14 lg:gap-7" id="resume">
            <div className="col-span-1">
                <EducationTimeline />
            </div>
            <div className="col-span-1">
                <JobTimeline />
            </div>
        </div>
    );
};

export default ResumeSection;
