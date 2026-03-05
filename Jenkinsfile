pipeline {
    agent any

    environment {
        AWS_DEFAULT_REGION = 'eu-north-1'
        S3_BUCKET = 'averiq-static-site'   // 🔴 change if needed
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Deploy to S3') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'aws-credentials',
                    usernameVariable: 'AWS_ACCESS_KEY_ID',
                    passwordVariable: 'AWS_SECRET_ACCESS_KEY'
                )]) {

                    sh '''
                    aws --version
                    aws s3 sync . s3://$S3_BUCKET --delete
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "✅ Deployment Successful!"
        }
        failure {
            echo "❌ Deployment Failed!"
        }
    }
}
