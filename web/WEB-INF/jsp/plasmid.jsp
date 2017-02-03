
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>

<t:layout>
        <h1>This would render a plasmid named ${name}!</h1>
        <div class='main-content'>
        <canvas id='plasmidRender'></canvas>
        </div>
</t:layout>
