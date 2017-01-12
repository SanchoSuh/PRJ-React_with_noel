package noel_project;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by coupang on 2017. 1. 12..
 */

public interface TodoRepository extends JpaRepository<Todo, Long> {
}
