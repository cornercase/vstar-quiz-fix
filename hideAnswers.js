
//var copy = $('body').clone()

// existing code

//chrome.runtime.onMessage.addListener(function() {
//	$('body').html($(copy))
//})

var hasHiddenOnce = 0;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
      if (request.command === 'hideAnswers') {
          sendResponse({fncall: "hide"});

          $('.quizreviewsummary').hide();
          $('.answer .incorrect').removeClass('incorrect');
          $('.answer .correct').removeClass('correct');
          $('.outcome').hide();
          if (hasHiddenOnce === 0) {
              $(':radio').removeAttr("checked");
          }
          $('.answer .icon').hide();
          $('#mod_quiz_navblock .incorrect').removeClass('incorrect');
          $('#mod_quiz_navblock .flagged').removeClass('flagged');
          $('#mod_quiz_navblock .correct').removeClass('correct');
          $('.questionflagimage').hide();
          $('input[type=radio]').attr('disabled', false);
          $('.grade').hide();
          $('.state').hide();
          $('.questionflagtext').hide();
          $('.questioncorrectnessicon').hide();
          hasHiddenOnce = 1;
      }
  
      
      if (request.command === 'showAnswers') {
          sendResponse({fncall: "show"});
          $('.quizreviewsummary').show();
          $('.answer .incorrect').addClass('incorrect');
          $('.answer .correct').addClass('correct');
          $('.outcome').show();
          $('.answer .icon').show();
          $('#mod_quiz_navblock .incorrect').addClass('incorrect');
          $('#mod_quiz_navblock .flagged').addClass('flagged');
          $('#mod_quiz_navblock .correct').addClass('correct');
          $('.questionflagimage').show();
          $('input[type=radio]').attr('disabled', false);
          $('.grade').show();
          $('.state').show();
          $('.questionflagtext').show();
          $('.questioncorrectnessicon').show();
      
      }


      if (request.command === 'floatNavBlock') {
          $("#mod_quiz_navblock").css({'position': 'fixed'});

      }

      if (request.command === 'unfloatNavBlock') {
          $("#mod_quiz_navblock").css({'position': ''});

      }
      
  }
  );






