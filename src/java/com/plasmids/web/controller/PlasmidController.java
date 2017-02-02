/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.plasmids.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/plasmid")
public class PlasmidController {
    @RequestMapping(method = RequestMethod.GET)
    public String plasmid(ModelMap model) {
        model.addAttribute("name", "MyFavoritePlasmid");
        return "plasmid";
    }
}
