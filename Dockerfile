# First stage: Build the project with Maven
FROM maven:3.9.8-eclipse-temurin-21 AS build

# Set working directory to /app and make sure it's a directory
RUN mkdir -p /app

# Set working directory to /app
WORKDIR /app

# Copy the source code and pom.xml to /app
COPY ./src /app/src
COPY pom.xml /app/

# Run Maven build (clean and install)
RUN mvn clean install -U

# Second stage: Set up the production image
FROM openjdk:21

# Set working directory to /app and ensure it's a directory
RUN mkdir -p /app

# Copy the generated JAR file from the build stage
COPY --from=build /app/target/sumitfolio-0.0.1-SNAPSHOT.jar /app/app.jar

# Set working directory to /app
WORKDIR /app

# Expose port 8080 for the application
EXPOSE 8080

# Command to run the application
<<<<<<< HEAD
CMD ["java", "-jar", "app.jar"]
=======
CMD ["java", "-jar", "app.jar"]
>>>>>>> 6dfcaca (Initial commit of Sumitfolio project)
