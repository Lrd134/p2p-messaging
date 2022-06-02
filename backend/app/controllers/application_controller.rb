class ApplicationController < ActionController::Base
  def not_found
    render json: {
      :error => "404, resource was not found."
    }.to_json
  end
end
