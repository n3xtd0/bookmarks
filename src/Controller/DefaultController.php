<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class DefaultController extends AbstractController{

    /**
     * @Route("/bookmarks")
     *       */
    public function index()
    {
        
        return $this->render('main.html.twig', array());
    }
}