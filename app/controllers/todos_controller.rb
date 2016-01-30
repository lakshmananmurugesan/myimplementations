class TodosController < ApplicationController
  
  def index
  @todo_items = Todo.all
  end
  

  def add
   Todo.create(:todo_item => params[:todo_text])
   redirect_to :action => 'index'
  end
  
  
  def destroy
  @todo_item = Todo.find(params[:id])
  @todo_item.destroy
 
  redirect_to todos_path
  
  end
  
end
