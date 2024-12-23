package com.example.sumitfolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class MainController {

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("name", "SumitFolio");
        model.addAttribute("title", "Java Developer");
        return "index";
    }

    @GetMapping("/project/{id}")
    public String projectDetails(@PathVariable Integer id, Model model) {
        model.addAttribute("projectId", id);
        return "projectdetails";
    }
}
