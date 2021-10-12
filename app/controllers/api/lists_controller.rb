class Api::ListsController < ApplicationController
  # before_action :set_list, only: [:show, :update, des]
  
  def index 
    render json: current_user.lists  
  end

  def show
    @list = current_user.lists.find(params[:id])
    render json: @list
  end

  def create 
    @list = current_user.lists.new(list_params)
    if @list.save 
      render json: @list
    else
      render json: { errors: @list.errors }, status: :unprocessable_entity
    end
  end 

  def update
    @list = current_user.lists.find(params[:id])
    if @list.update(list_params)
      render json: @list
    else
      render json: { errors: @list.errors }, status: :unprocessable_entity
    end
  end 

  def destroy
    @list = current_user.lists.find(params[:id])
    @list.destroy
    render json: { message: 'List has been destory' }
  end

  private 
    # { list: { title: "", desc: ""}}
    def list_params
      params.require(:list).permit(:title, :desc)
    end
end