<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<t:layout>
    <script src="<c:url value="/scripts/plasmid/drawing_context.js" />" type="text/javascript"></script>
    <script src="<c:url value="/scripts/plasmid/vector_ring.js" />" type="text/javascript"></script>
    <script src="<c:url value="/scripts/plasmid/doc_ready.js" />" type="text/javascript"></script>
    
    <h1>This would render a plasmid named ${name}!</h1>
    <div class='main-content'>
        <canvas id='plasmidRender' height="800px" width="1024px"></canvas>
    </div>
</t:layout>
