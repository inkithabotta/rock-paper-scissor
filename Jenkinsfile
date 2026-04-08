pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/YOUR_USERNAME/rps-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t rps-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker rm -f rps-container || true'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 4000:80 --name rps-container rps-app'
            }
        }
    }
}
