class ContactsController < ApplicationController
    
    def new
      @contact = Contact.new
	  end

	def show
		@contact = Contact.find(params[:id])
	end

	def index
		@contact = Contact.all
		if params[:search]
   		 @contact = Contact.where('firstname LIKE ?',"%#{params[:search]}%")
   	 else
   		 @contact = Contact.all
   	 end
	end

	def edit
		@contact = Contact.find(params[:id])
	end

	def update
		@contact=Contact.find(params[:id])
   		if @contact.update(contact_params)
			respond_to do |format|
				format.html { redirect_to @contact , notice: 'Contact updated !!' }
			end
		else
			render 'edit'
		end
	end

	def destroy
		@contact = Contact.find(params[:id])
		@contact.destroy
		redirect_to contacts_path
	end

	def create
	  	@contact = Contact.create(contact_params)
		if @contact.save   
		    respond_to do |format|
		    	format.html { redirect_to @contact , notice: 'Done, Contact Added !!' }
		    end
		else
		    render 'new'
		end
	end
	
	private
		def contact_params
			params.require(:contact).permit(:firstname, :lastname, :mno, :emailid, :gender)
		end
end
