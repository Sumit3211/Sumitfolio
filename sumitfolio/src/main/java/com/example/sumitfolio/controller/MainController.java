package com.example.sumitfolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String home(Model model) {
        // Add any necessary model attributes for dynamic content
        model.addAttribute("name", "Sumit Kushwaha");
        model.addAttribute("title", "Java Developer");
        
        // Placeholder projects (you'll replace with actual projects)
        model.addAttribute("projects", new String[]{
            "E-commerce Platform",
            "Portfolio Website",
            "Spring Boot Microservices"
        });
        
        // Skills with proficiency levels
        model.addAttribute("skills", new String[]{
            "Java:90",
            "Spring Boot:85",
            "Microservices:80",
            "Docker:75",
            "Kubernetes:70"
        });
        
        return "index";
    }
}