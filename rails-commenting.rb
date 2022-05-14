# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Created a class called BlogPostsController that is inheriting from ApplicationController. 
class BlogPostsController < ApplicationController
  
  def index
    # ---2) Created an instance variable called @posts and assigned it to call on all items in the database (Blogpost.all). By making posts an instance variable we can now call it outside of the index method. 
    @posts = BlogPost.all
  end

  # ---3) Created a method called show that tells Rails to find only the post that has the id defined in the params. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Created a method called new, that creates a new post inside the Blogpost when called. 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Assigned instance variable @post to create blog_post_params for Blogpost database if @post is considered valid. If valid, the create method will return the object and save it to the database.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) Created a method called edit that tells Rails to edit only the post that has the id defined in the params. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)Assigned instance variable @post to update blog_post_params for Blogpost database if @post is considered valid. If valid, the update method will return the object and save it to the database.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) The purpose of this code is that if first condition is true, then it will execute the destroy of that specific id from line 54, however, if it is not true, then it will redirect the user back to input a valid id. 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Establishing that from this point on, these methods should be private. 
  private
  def blog_post_params
    # ---10)Using the require built-in method to require the blog_post table, and permits editing to only the title and content params. 
    params.require(:blog_post).permit(:title, :content)
  end
end
