class Api::V1::JobsController < ApplicationController
  def index
    @jobs = Job.all.order(:id)
    render json: @jobs
  end

  def show
    @job = Job.find(params[:id])
    render json: @job
  end
end
