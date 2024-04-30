package sintes.articles.projecte;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class SintediaProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(SintediaProjectApplication.class, args);
	}

}
