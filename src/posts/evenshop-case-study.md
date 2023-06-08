---
title: 'Case Study: Evenshop'
description: 'How I leveraged Hugo & SnipCart to build an online furniture shop'
date: '2018-02-10'
author: 'Rodgers M Gitau'
published: true
---

<script>
  import Message from '$lib/components/Blog/Message.svelte'
</script>

## Challenge

My sister-in-law aside from being an amazing mother to 2 beautiful kids, works a full-time job and also runs a successfull side-hustle of trading in custom hand-crafted home accessories.

When I graduated from my coding bootcamp( _November 2016_ ), I wanted to build he a website where she can showcase her wares. I ended up abandoning my first attempt, frustrated with the design and the lack of an simple yet flexible static site generator that can intergrate easily with an online shopping cart

Then early 2018 I discovered how to easily achieve all this using [Hugo](https://gohugo.io/) and [Snipcart](https://snipcart.com/)

## Approach

My approach was simple:- create a minimalistic website that allowed the showcasing of all products from a .json file and allow adding to cart for checkout. I then decided to build the MVP & host it via [Netlify](https://www.netlify.com/)

My initial plan:-

- Create an account on SnipCart and configured the account to local currency & timezone
- Installed Hugo and generated a new project without any themes
- Designed and coded a clean simple one-pager website.
- Included SnipCart to the project
- Github push then deployed with netlify

## Research Links

- [Charles Ouellet's Blog Post](http://dexie.org/docs/)
- [Dexie Docs](http://dexie.org/docs//)


<Message title="Update: 10th June 2018">
  The cart offered by Snipcart proved to rigid and customization required too much effort.
  
  It already required a UI upgrade by mid 2018 and a better payment method.

  I refactored the entire web application using : [IndexedDB](https://w3c.github.io/IndexedDB/) utilizing the wrapper [Dexie](http://dexie.org/).

  I'm using a local Mobile Money called [MPESA](https://www.safaricom.co.ke/business/corporate/m-pesa-payment-services/m-pesa-api) for the payment option.  
</Message>
