pipeline {
    agent any

    environment {
        S3_BUCKET = 'averiq-static-site'
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Deploy to S3') {
            steps {
                withAWS(credentials: 'aws-credentials', region: 'eu-north-1') {
                    sh '''
                    aws s3 ls
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
