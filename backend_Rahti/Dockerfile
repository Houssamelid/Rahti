FROM python:3.10-slim  

WORKDIR /usr/src/backend_Rahti

# Environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install netcat (choose netcat-openbsd)
RUN apt-get update && apt-get install -y netcat-openbsd

# Upgrade pip
RUN pip install --upgrade pip

# Copy and install dependencies
COPY requirements.txt .  
RUN pip install --no-cache-dir -r requirements.txt

# Copy entrypoint script
COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' /usr/src/backend_Rahti/entrypoint.sh 
RUN chmod +x /usr/src/backend_Rahti/entrypoint.sh && ls -l /usr/src/backend_Rahti/entrypoint.sh


# Copy application code
COPY . .

# Use the entrypoint script to run the application
ENTRYPOINT ["/usr/src/backend_Rahti/entrypoint.sh"]
