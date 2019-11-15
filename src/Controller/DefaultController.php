<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\ORM\emInterface;
use App\Entity\Bookmark;
use App\Repository\BookmarkRepository;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends AbstractController{

    /**
     * @Route("/bookmarks", name="bookmarks")
     *       */
    public function index(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        
        $bookmark = new Bookmark();
        $form = $this->createFormBuilder($bookmark)
            ->add('url',  TextType::class)
            ->add('save', SubmitType::class)
            ->getForm();
        ;
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $bookmark = $form->getData();
            $bookmark->setLast_Modified( date_create_from_format('Y-m-d H:i:s', date("Y-m-d H:i:s")) );
            $em = $this->getDoctrine()->getManager();
            $em->persist($bookmark);
            $em->flush();
        }
       
        $bookmarkList = $em->getRepository('App:Bookmark')->findAll();
        return $this->render('main.html.twig', array(
            "bookmarkList" => $bookmarkList,
            "form"         => $form->createView()
        ));
    }

    /**
     * @Route("/bookmarks/delete/{id}")
     *       */
    public function delete($id){
        $em = $this->getDoctrine()->getManager();
        $bookmark = $em->getRepository('App:Bookmark')->findOneById($id);
        $em->remove($bookmark);
        $em->flush();

        return $this->redirectToRoute('bookmarks');
    }


}