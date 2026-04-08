FROM nginx:alpine

# Copy frontend files to nginx folder
COPY . /usr/share/nginx/html

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]