class UsersController < ApplicationController
    def index
      @users = User.all
      
      render json: @users
    end
  
    def show
      @user = User.find(params[:id])

      render json: @user
    end
  
    def create
      @user = User.new(user_params)
      if @user.save
        render json: @user
      else
        render json: @user
      end
    end
  
    def update
      @user = User.find(params[:id])
      if @user.update(user_params)
        render json: @user
      else
        render error: { error: 'Unable to update user.' }, status: 400
      end
    end
  
    def destroy
      @user = User.find(params[:id])
      @user.destroy
      render json: nil
    end
  
    private
  
    def user_params
      params.require(:user).permit(:full_name, :email, :age)
    end
  end
