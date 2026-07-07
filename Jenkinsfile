pipeline {
    agent any

      environment {
        PARABANK_URL = 'https://parabank.parasoft.com/parabank/index.htm'
        PARABANK_USERNAME = 'user19'
        PARABANK_PASSWORD = 'keepthis'
    }


    stages {
        
         stage('Check Environment Variables') {
    steps {
        bat 'echo %PARABANK_URL%'
        bat 'echo %PARABANK_USERNAME%'
    }
}
        
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }

        stage('Publish HTML Report') {
            steps {
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Report'
                ])
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
            archiveArtifacts artifacts: 'test-results/**'
        }

        failure {
            echo 'Tests Failed'
        }

        success {
            echo 'Tests Passed'
        }
    }
}