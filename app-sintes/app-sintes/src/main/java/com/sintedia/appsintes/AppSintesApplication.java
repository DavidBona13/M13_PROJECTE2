package com.sintedia.appsintes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class AppSintesApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppSintesApplication.class, args);
	}

}
