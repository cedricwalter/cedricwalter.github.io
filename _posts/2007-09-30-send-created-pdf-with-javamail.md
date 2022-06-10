---
id: 3061
title: 'Send created pdf with javamail'
date: '2007-09-30T12:16:33+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3061'
permalink: /java/send-created-pdf-with-javamail/
header:
  teaser: /assets/images/2020/02/java.png
tags:
    - HowTo
    - java
    - tutorial
---

```
public void testSendPDWithJavamail() {
        String host="mailhost.xxxxx.com";
        String from="junit@xxxxx.com.ch";
        String to="user@xxxxx.com";
        // Get system properties
        Properties props = System.getProperties();
        // Setup mail server
        props.put("mail.smtp.host",host);
        // Get session
        Session session = Session.getInstance(props,null);
        try {
            // Define message
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(from));
            message.addRecipient(Message.RecipientType.TO,new InternetAddress(to));
            message.setSubject("Hello #JavaMail Attachment subject");
            Multipart multipart = new MimeMultipart();

            // Part one is a text
            MimeBodyPart textMessageBodyPart = new MimeBodyPart();
            textMessageBodyPart.setText("Hi hello this is the msg in mail");
            multipart.addBodyPart(textMessageBodyPart);

            // Part two is attachment
            MimeBodyPart attachmentMessageBodyPart=new MimeBodyPart();
            byte[] pdf =new Resource("A1U0E0.pdf").getRawContent();

            attachmentMessageBodyPart.setDataHandler(
            new DataHandler(new ByteArrayDataSource(pdf,"application/pdf")));
            multipart.addBodyPart(attachmentMessageBodyPart);

            // Put parts in message
            message.setContent(multipart); // Send the message
            Transport.send(message);
        }
        catch(MessagingException e){Assert.fail(e.getMessage());}
        catch(IOException e){Assert.fail(e.getMessage());}
        System.out.println("sent msg");
}
```