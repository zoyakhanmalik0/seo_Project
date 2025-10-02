// Tamino Martinius - All rights reserved
// Copyright © 2013 Tamino Martinius
// Copyright © 2013 Particleslider.com
// Terms of usage: http://particleslider.com/legal/license

var init = function () {
  var isMobile = /mobile/i.test(navigator.userAgent) || window.innerWidth < 1000;

  // ❌ Don't run on mobile
  if (isMobile) {
    var psContainer = document.getElementById("particle-slider");
    if (psContainer) {
      psContainer.style.display = "none";
    }
    return; // stop here
  }

  // ✅ Run only on desktop
  var ps = new ParticleSlider({
    ptlGap: 0,
    ptlSize: 1,
    width: 400,
    height: 400,
  });

  var gui = new dat.GUI();
  gui.add(ps, "ptlGap").min(0).max(5).step(1).onChange(function () {
    ps.init(true);
  });
  gui.add(ps, "ptlSize").min(1).max(5).step(1).onChange(function () {
    ps.init(true);
  });
  gui.add(ps, "restless");
  gui.addColor(ps, "color").onChange(function (value) {
    ps.monochrome = true;
    ps.setColor(value);
    ps.init(true);
  });

  (window.addEventListener
    ? window.addEventListener("click", function () {
        ps.init(true);
      }, false)
    : (window.onclick = function () {
        ps.init(true);
      }));
};

var initParticleSlider = function () {
  var psScript = document.createElement("script");
  (psScript.addEventListener
    ? psScript.addEventListener("load", init, false)
    : (psScript.onload = init));
  psScript.src =
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/ps-0.9.js";
  psScript.setAttribute("type", "text/javascript");
  document.body.appendChild(psScript);
};

(window.addEventListener
  ? window.addEventListener("load", initParticleSlider, false)
  : (window.onload = initParticleSlider));
