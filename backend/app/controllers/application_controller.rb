class ApplicationController < ActionController::API

  def not_found
    render json: {
      :error => "404, resource was not found."
    }.to_json
  end
  
end
