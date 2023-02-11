class JobsController < ApplicationController
    def index
        @jobs = Job.all.order('created_at DESC')
    end

    def new
        @job = Job.new
    end

    def create
        @job = Job.new(job_params)
        if @job.save
            redirect_to jobs_path
        else
            render :new 
        end
    end

    private

    def job_params
        params.require(:job).permit(:photo, :company_name, :company_description, :employees, :job_title, :skills, :salary )

    end
end