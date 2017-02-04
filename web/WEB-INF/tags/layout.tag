<%@tag description="Plasmids site layout" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
    <head>
        <title>${pageTitle} - Plasmids</title>
        <link href='https://fonts.googleapis.com/css?family=Raleway' rel="stylesheet">
        <link href="<c:url value="/styles/site.css" />" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" type="text/javascript"></script>
    </head>
    <body>
        <div class='container'>
            <jsp:doBody/>
        </div>
        <footer>
            <hr />
            <p> Made by <a href='https://github.com/adriab00100'>Brian Adriance</a></p>
        </footer>
    </body>
</html>