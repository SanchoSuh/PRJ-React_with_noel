package noel_project;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="todo")
public class Todo {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @JsonProperty
    private Long id;

    @JsonProperty
    private boolean completed;

    @Column(nullable=false)
    @JsonProperty
    private String text;

}
