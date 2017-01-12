package noel_project;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by coupang on 2017. 1. 12..
 */
@Controller
public class HomeController {
    @GetMapping("/")
    public String index(Model model) {
        String viewName = "/index";
        return viewName;
    }

}
