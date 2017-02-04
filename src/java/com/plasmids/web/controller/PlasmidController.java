package com.plasmids.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/plasmid")
public class PlasmidController {
    @RequestMapping(method = RequestMethod.GET)
    public String plasmid(ModelMap model) {
        model.addAttribute("name", "MyFavoritePlasmid");
        return "plasmid";
    }
}
