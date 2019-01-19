<?php
defined('BASEPATH') OR exit('No direct script access allowed');
(!isset($_SESSION['boleh'])) ? header('Location: '.base_url()."admin") : '';
?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>melissa</title>
	<!-- UIkit CSS -->
	<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.6/css/uikit.min.css" /> -->

	<link rel="stylesheet" href="../assets/css/uikit.min.css">
	<link rel="stylesheet" href="../assets/css/style.css">
	<link rel="stylesheet" href="../assets/css/main.css">
	<link rel="stylesheet" href="../assets/css/main0.css">

	<!-- UIkit JS -->
	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.6/js/uikit.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.6/js/uikit-icons.min.js"></script> -->
	<script src="../assets/js/upload_image.js"></script>
	<script src="../assets/js/uikit.min.js"></script>
	<script src="../assets/js/uikit-icons.min.js"></script>
	<script src="../assets/js/jquery-3.3.1.min.js"></script>
</head>
<body>

	<div class="uk-offcanvas-content sct-frame">
		<div uk-sticky="media: 960" class="uk-navbar-container sct-navbar-container uk-sticky uk-hidden@m">
			<div class="uk-container uk-container-expand">
				<nav class="uk-navbar uk-margin" uk-navbar>
					<div class="uk-navbar-left">
						<a uk-navbar-toggle-icon="" href="#offcanvas" uk-toggle="" class="uk-navbar-toggle uk-hidden@m uk-navbar-toggle-icon uk-icon"></a>
						<span class="uk-text-primary">melissa</span> &nbsp; Admin
					</div>
					<div class="uk-navbar-right">
						<div class="uk-navbar-item">
							<div uk-form-custom="target: > * > span:first-child">
								<select name="module-lang">
								</select>
								<button class="uk-button uk-button-default" type="button" tabindex="-1">
									<span></span>
									<span uk-icon="icon: chevron-down"></span>
								</button>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</div>

		<div id="offcanvas" uk-offcanvas="mode: reveal; overlay: true" class="sct-offcanvas">
			<div class="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-push">
				<button class="uk-offcanvas-close" type="button" uk-close></button>
				<div class="uk-panel">
					<ul class="uk-nav uk-nav-default sct-nav">
						<li class="uk-nav-header">NAVIGATION</li>
						</ul>
				</div>
			</div>
		</div>
		<div class="sct-sidebar-left uk-visible@m">
			<h3><span class="uk-text-primary">melissa</span> Admin</h3>
			<ul class="uk-nav uk-nav-default sct-nav">
				<li class="uk-nav-header">NAVIGATION</li>
				<li class=""><a href="journal">Journal</a></li>
				<li class="uk-active"><a href="lates">Article</a></li>
				<li class=""><a href="catalogue">Catalogue</a></li>
				<li class=""><a href="about">About</a></li>
			</ul>
			<ul class="uk-nav uk-nav-default sct-nav">
				<li class="uk-nav-header"></li>
				<li><a href="logout">Logout</a></li>
			</ul>
		</div>
		<div class="sct-main uk-section uk-section-default">
			<div class="uk-container uk-container-custom">
				<!-- Content -->
				<div id='form_table'>
					<div class="uk-animation-slide-top-small">
					<p class="uk-align-right" uk-margin>
					    <button id="new_btn" class="uk-button uk-button-small sct-main-button"><span uk-icon="icon: plus"></span></button>
					</p>
					<table class="uk-table uk-table-hover uk-table-divider uk-width-1-1">
							<thead>
									<tr>
											<th>Date</th>
											<th>Title</th>
											<th>Content</th>
											<th>Image</th>
											<th>opt</th>
									</tr>
							</thead>
							<tbody>
											<?php foreach ($data as $row) {
												$desc = (strlen($row->Description) >= 100) ? substr($row->Description, 0, 100) . '...' : $row->Description;
												echo '
												<tr>
													<td>'.$row->Date.'</td>
													<td>'.$row->Title.'</td>
													<td>'.$desc.'</td>
													<td>'.$row->Image.'</td>
													<td>
														<button id="edit_btn" item="'.$row->ID.'" class="uk-button-primary uk-button-small "><span uk-icon="icon: pencil"></span></button>
														<div class="uk-button-group">
											        <!-- The button toggling the dropdown -->
															<button class="uk-button-danger uk-button-small "><span uk-icon="icon: trash"></span></button>
											        <div id="dropmenu" uk-dropdown="mode: click; boundary: ! .uk-button-group; boundary-align: true;">
																<button id="close" class="uk-button-danger uk-button-small uk-dropdown-close"><span uk-icon="icon: close"></span></button>
																<button id="delete_btn" item="'.$row->ID.'" class="uk-button sct-main-button uk-button-small "><span uk-icon="icon: check"></span></button>
															</div>
														</div>
													</td>
												</tr>
												';
											} ?>
							</tbody>
					</table>
					</div>
					</div>
					<div id='form_input' style="display:none">
						<div class='uk-containser-custom uk-container'>
						<div class="uk-animation-slide-top-small">

        		<form class="uk-form-horizontal" id="form_inputan">

					    <div class="uk-margin">
					        <label class="uk-form-label" for="form-stacked-text" >Title</label>
					        <div class="uk-form-controls">
					            <input class="uk-input uk-form-width-large" id="form-stacked-text" type="hidden" name="id" value="">
					            <input class="uk-input uk-form-width-large" id="form-stacked-text" type="text" name="title">
					        </div>
					    </div>
					    <div class="uk-margin">
					        <label class="uk-form-label" for="form-stacked-text" >Content</label>
					        <div class="uk-form-controls">
					            <textarea class="uk-textarea  uk-form-width-large" rows="15" name="content"></textarea>
					        </div>
					    </div>
							<div class="uk-margin" uk-margin>
								<label class="uk-form-label" for="form-stacked-text" >Picture</label>
								<div class="uk-form-controls">
        				<div uk-form-custom="target: true">
			            <input type="file" name="userfile">
			            <input class="uk-input uk-form-width-medium" type="text" placeholder="Select file" name="picture" disabled>
						    </div>
						    </div>
						   </div>
					</form>

					<p class="uk-align-right">
					    <button id="ok_btn" class="uk-button sct-main-button">Save</button>
					    <button id="can_btn" class="uk-button uk-button-danger">Cancel</button>
					</p>
					</div>
				</div>
				</div>

			</div>
		</div>
	</div>

</body>
</html>
<script>
$( document ).ready(function() {
cont();
});
var url_image;
function cont(){

	$("body").on("click", '#new_btn', function(){
		$("#form_input").css("display","block");
		$("#form_table").css("display","none");
		$('form').find("input[type=text], input[type=hidden], input[name=id], textarea").val("");
	});
	$("body").on("click", '#can_btn', function(){
		$("#form_input").css("display","none");
		$("#form_table").css("display","block");
	});
	$("body").on("click", "#ok_btn", function(){
		if($('[name="id"]').val() != ""){
			editarticle();
			}else{
				if($('[name="title"]').val() != "" || $('[name="content"]').val() != "")
				{
					addarticle();
				}else{
					html =  '<div class="uk-alert-warning uk-animation-slide-top-small" uk-alert>'+
									    '<a class="uk-alert-close" uk-close></a>'+
									    '<p>Title and Content cannot be empty!.</p>'+
									'</div>';
					$('#form_input').prepend(html);
				}
			}
	});
	$("body").on("click", "#delete_btn", function(){
		var ini = $(this).attr('item');
		deletearticle(ini);
	});
	$("body").on("click", "#edit_btn", function(){
		var ini = $(this).attr('item');
		$('[name="id"]').val(ini);
		$("#form_input").css("display","block");
		$("#form_table").css("display","none");
		getselecteddata(ini);
	});

	$('body').on('change', '[name=typecatalogue]', function(){
		if($('option:selected').text() == 'Other'){
			html = 	'<div class="uk-form-controls">'+
									'<input class="uk-input uk-form-width-large" id="form-stacked-text" type="text" name="other" value="" placeholder="type here...">'+
								'</div>';
			$('#other').append(html);
		}else{
			$('#other').html("");
		}
	});

}
function getselecteddata(id){
	$.ajax({
			 type: "POST",
			 url: '/melissa/admin/selectlates',
			 data: {
				 id : id
			 },
			 dataType: "json",
			 success: function (result) {
				 // content = result[0].Content.replace("<br/>", /\n/g) ;
				 var regex = /<br\s*[\/]?>/gi;
				 content = result[0].Description.replace(regex, "\n") ;
					$('[name="title"]').val(result[0].Title);
					$('[name="content"]').val(content);
					$('[name="picture"]').val(result[0].Image);
					url_image = result[0].Image;
			 },
			 error: function(XMLHttpRequest, textStatus, errorThrown) {
					 console.log(XMLHttpRequest);
				}
	 });
}
function deletearticle(id){
	$.ajax({
			 type: "POST",
			 url: '/melissa/admin/deletelates',
			 data: {
				 id : id
			 },
			 dataType: "json",
			 success: function (result) {
					location.reload();
			 },
			 error: function(XMLHttpRequest, textStatus, errorThrown) {
					 console.log(XMLHttpRequest);
				}
	 });
}

function addarticle(){
		var date = new Date();
		date = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
		var title = $('[name=title]').val();
		var picture = $('[name=picture]').val();
		var content = $('[name="content"]').val();
		var upload = $('[name="userfile"]').val();
		content = content.replace(/\n/g, "<br/>") ;
		$.ajax({
         type: "POST",
         url: '/melissa/admin/addlates',
         data: {
					 date			: date,
					 title		: title,
					 content	: content,
					 picture	: picture,
					 upload		: upload
				 },
         dataType: "json",
         success: function (result) {
					 if(picture != ''){
						upload_image();
					}else{
						location.reload();
					}
         },
				 error: function(XMLHttpRequest, textStatus, errorThrown) {
				     console.log(XMLHttpRequest);
				  }
     });
						// upload_image();
}
function editarticle(){
		var date = new Date();
		date = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
		var id = $('[name=id]').val();
		var title = $('[name=title]').val();
		var picture = $('[name=picture]').val();
		var content = $('[name="content"]').val();
		var upload = $('[name="userfile"]').val();
		content = content.replace(/\n/g, "<br/>") ;
		$.ajax({
         type: "POST",
         url: '/melissa/admin/editlates',
         data: {
					 id 			: id,
					 date			: date,
					 title		: title,
					 content	: content,
					 picture	: picture,
					 upload		: upload
				 },
         dataType: "json",
         success: function (result) {
					 if(url_image != picture){
						upload_image();
					}else{
						location.reload();
					}
         },
				 error: function(XMLHttpRequest, textStatus, errorThrown) {
				     console.log(XMLHttpRequest);
				  }
     });
}

function upload_image(){
	var data = new FormData($('#form_inputan')[0]);
	data.append("lokasi", "article");
	// var upload = $('[name="userfile"]').val();
	$.ajax({
			 type: "POST",
			 url: '/melissa/admin/uploadimage',
			 data: data,
			 dataType: "json",
			 contentType: false,
    	 processData: false,
			 success: function (result) {
				 console.log(result);
					location.reload();
			 },
			 error: function(XMLHttpRequest, textStatus, errorThrown) {
					 console.log(XMLHttpRequest);
				}
	 });
}

</script>
