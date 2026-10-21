const textConfig = {
  text1: "Chúc mừng 20/10 muộn ♡",
  text2: "Nếu cậu đang đọc được trang này thì mật thư đã thành công gửi tới từ phương trời HUS mà ko bị lạc trôi giữa đường. Oh yeahh",
  text3: `Hy vọng cậu đã có một ngày 20/10 thật vui!
    
         `,
  text4: `Chúc bạn nữ tớ sắp quen luôn vui vẻ tươi tắn để đón nhận nhiều điều mới mẻ trong cuộc sống nhé (tớ chẳng hạn :v) 
        Thực ra hôm trước tớ đã quay lại góc hành lang nhắn cậu, ờ thì... hoa đã héo rũ ̶n̶h̶ư̶ ̶t̶ư̶ơ̶n̶g̶ ̶l̶a̶i̶ ̶c̶ủ̶a̶ ̶c̶h̶ú̶n̶g̶ ̶t̶a̶ ̶v̶ậ̶y̶.
        Dù hình tượng này cũng chính là nội dung trọng tâm trong bài thơ tớ định đọc cậu nghe,
        nhưng tớ chỉ sợ làm cậu thất vọng thôi (nếu cậu thực sự đã tìm chỗ đó) 😭 Tí nữa cậu có thể xem ảnh tớ chụp lúc trước nhe :))
  `,
  text5: "Tớ buồn vì cậu lừa t (CẤM BẤM - thử xem)",
  text6: "Tớ sẽ sang HUS thăm lại 🥰",
  text7: "Nếu tìm được nhau cậu hứa cho mình cái gì í",
  text8: "hứa!",
  text9: "... (tớ ko muốn ép thoại cậu 👉👈 dù ta đang ở cái nơi đc thiết kế để làm điều đó)",
  text10: "Rất vui được làm quen!",
  text11:
    `Nhắn lại một câu cho người ta biết thư không bị mấy anh điệp viên khoa IT bên cậu lấy mất nhé.
    Rất xin lỗi nếu như những thứ này làm cậu cảm thấy phiền. 
    Sau đây cũng là 1 giải pháp để ko phiền đến bạn PTIT chủ thớt nữa, (tội bạn 😥) mình ko thể cứ nhắn mãi dưới bài bạn ấy đc hic
    `,
  text12: "Xemmm",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "https://raw.githubusercontent.com/takoizume/20thg10withA3/main/img/logi.gif",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();

    // Kiểm tra nếu là điện thoại thì thu nhỏ chiều rộng và đệm lại
    //var isMobile = screen.width <= 600;

    
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      //width: isMobile ? "92%" : 600,
      //padding: isMobile ? "1.5em" : "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='.....'>",
      //html: "<textarea class='form-control' id='txtReason' placeholder='.....' rows='3' style='width: 100%; font-size: 14px; text-align: center; resize: none; padding: 10px; border-radius: 10px; line-height: 1.4;'></textarea>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("https://lh5.googleusercontent.com/6n_XZWbkr6SMtnFLWrqODGGg2vCv8GPnsBC4unHE6VsAp7vmN8JBrnSzts-sO9XZ6qJd7C5mdl7xGg=w1512-h844")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://docs.google.com/spreadsheets/d/1_CPlJyPO0SUwW8dcorrB7knbooIRduHDZK9Y3xVNstg/edit?gid=0#gid=0";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
