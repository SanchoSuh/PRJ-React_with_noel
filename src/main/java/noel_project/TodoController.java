package noel_project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by coupang on 2017. 1. 12..
 */

@RestController
@RequestMapping(value="/api/todos", produces = "application/json; charset=UTF-8")
public class TodoController
{
    @Autowired
    private TodoRepository todoRepository;

    @GetMapping
    public List<Todo> fetch() {
        return todoRepository.findAll();
    }

}
