var config = {
    apiKey: "AIzaSyAYu8hfGvL44z_r4f9VU34HxhcD1qwtFGw",
    authDomain: "sabong-king.firebaseapp.com",
    databaseURL: "https://sabong-king.firebaseio.com",
    projectId: "sabong-king",
    storageBucket: "sabong-king.appspot.com",
    messagingSenderId: "857715492200"
};

firebase.initializeApp(config);

jQuery(function($){

    var f = {};

    f.init = function() {
        setTimeout(function(){
            var conn = f.connect('users');
            // f.adding(conn);
            f.viewing(conn);
        }, 1500);
    };

    f.connect = function(table) {
        var db = firebase.database(),
        r = db.ref(table);

        return r;
    };

    f.adding = function(conn) {
        conn.push({
            first_name: 'John',
            last_name: 'Doe',
            email: 'johndoe@gmail.com',
            location: {
                city: 'The Internet',
                state: 'The Internet',
                zip: '127.0.0.1'
            }
        });
    };

    f.viewing = function(conn) {
        conn.on("child_added", function(snap) {
            // console.log("added", snap.key, snap.val());
            $('ul#contacts').html(f.objToHtml(snap.val()));
        });
    };

    f.objToHtml = function(user) {
        return "<li>"+ user.first_name + " " + user.last_name + "</li>";
    };

    f.init();
});

function replacee(t) {
  return t.replace('<script>', '').replace('</script>', '');
}


/*
var config = {
      apiKey: "AIzaSyAYu8hfGvL44z_r4f9VU34HxhcD1qwtFGw",
      authDomain: "sabong-king.firebaseapp.com",
      databaseURL: "https://sabong-king.firebaseio.com",
      projectId: "sabong-king",
      storageBucket: "sabong-king.appspot.com",
      messagingSenderId: "857715492200"
};
firebase.initializeApp(config);

//create firebase database reference
var dbRef = firebase.database();
var contactsRef = dbRef.ref('contacts');

//load older conatcts as well as any newly added one...
contactsRef.on("child_added", function(snap) {
  // console.log("added", snap.key, snap.val());
  $('#contacts').append(contactHtmlFromObject(snap.val()));
});

//save contact
$('.addValue').on("click", function( event ) {  
    event.preventDefault();
    if( $('#name').val() != '' || $('#email').val() != '' ){
      contactsRef.push({
        name: $('#name').val(),
        email: $('#email').val(),
        location: {
          city: $('#city').val(),
          state: $('#state').val(),
          zip: $('#zip').val()
        }
      })
      contactForm.reset();
    } else {
      alert('Please fill atlease name or email!');
    }
  });

//prepare conatct object's HTML
function contactHtmlFromObject(contact){
  // console.log( contact );
  var html = '';
  html += '<li class="list-group-item contact">';
    html += '<div>';
      html += '<p class="lead">'+replacee(contact.name)+'</p>';
      html += '<p>'+replacee(contact.email)+'</p>';
      html += '<p><small title="'+replacee(contact.location.zip)+'">'
                + replacee(contact.location.city) + ', '
                + replacee(contact.location.state) + '</small></p>';
    html += '</div>';
  html += '</li>';
  return html;
}

function replacee(t)
{
  return t.replace('<script>', '').replace('</script>', '');
}

/*
jQuery(function($){

  var f = {};

  f.init = function() {
    var config = {
      apiKey: "AIzaSyAYu8hfGvL44z_r4f9VU34HxhcD1qwtFGw",
      authDomain: "sabong-king.firebaseapp.com",
      databaseURL: "https://sabong-king.firebaseio.com",
      projectId: "sabong-king",
      storageBucket: "sabong-king.appspot.com",
      messagingSenderId: "857715492200"
    };

    firebase.initializeApp(config);

    setTimeout(function(){
      var conn = f.connect('users');
      // f.adding(conn);
      f.viewing(conn);
    }, 1500);
  };

  f.connect = function(table) {
    var db = firebase.database(),
      r = db.ref(table);

    return r;
  };

  f.adding = function(conn) {
    conn.push({
      first_name: 'John',
      last_name: 'Doe',
      email: 'johndoe@gmail.com',
      location: {
        city: 'The Internet',
        state: 'The Internet',
        zip: '127.0.0.1'
      }
    });

    // f.viewing(conn);
  };

  f.viewing = function(conn) {
    conn.on("child_added", function(snap) {
      console.log("added", snap.key, snap.val());
      $('ul#contacts').html(f.objToHtml(snap.val()));
    });
  };

  f.objToHtml = function(user) {
    return $('</li>').text(user.first_name + ' ' + user.last_name);
  };

  f.init();
});

function replacee(t)
{
  return t.replace('<script>', '').replace('</script>', '');
}
*/
*/