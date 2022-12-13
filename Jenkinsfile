pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/testtestingtester/zombies-angular-nestjs.git'
      }
    }
     
    stage('Build') {
      steps {
        sh 'cd app && npm install && npm run build && cd ..'
        sh 'cd api && npm install && npm run build && cd ..'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'cd app && npm run test && cd ..'
        sh 'cd api && npm run test && cd ..'
      }
    }
  }
}
