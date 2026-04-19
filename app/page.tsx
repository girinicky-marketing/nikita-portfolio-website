"use client";
import React from "react";


export default function NikitaPortfolio() {
    
    const tabs = [
  { key: "projects", label: "Projects" },
  { key: "influencer", label: "Influencer Marketing" },
  { key: "promotions", label: "Promotions" },
  { key: "results", label: "Results" },
] as const;

type TabKey = typeof tabs[number]["key"];


const [activeTab, setActiveTab] = React.useState<TabKey>("projects");

    const galleryLinks: Record<TabKey, string[]> ={
  projects: [
    "https://www.instagram.com/the.galleria.mall/", "https://www.instagram.com/awesomeanalytics/", "https://www.instagram.com/awesomeinvesting/", "https://www.instagram.com/officesolutionsmea/", "https://www.instagram.com/rarch_architects/", "https://www.instagram.com/yarnsoftheeast/", "https://www.instagram.com/chandibhandarofficial/", "https://www.instagram.com/owwaterpark/", "https://www.instagram.com/naturals_signature_salon/"
  ],
  influencer: [
    "#", "#", "#", "#", "#", "#"
  ],
  promotions: [
    "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"
  ],
  results: [
    "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"
  ],
};

const galleryData: Record<TabKey, string[]> ={
  projects: [
    "/images/work1.jpg",
    "/images/work2.jpg",
    "/images/work4.jpg",
    "/images/work5.jpg",
    "/images/work6.jpg",
    "/images/work7.jpg",
    "/images/work8.jpg",
    "/images/work9.jpg",
    "/images/work10.jpg",
  ],
  influencer: [
    "/images/inf1.png",
    "/images/inf2.png",
    "/images/inf3.png",
    "/images/inf4.png",
    "/images/inf5.png",
    "/images/inf6.png",
  ],
  promotions: [
    "/images/promo1.jpg",
    "/images/promo2.jpg",
    "/images/promo3.jpg",
    "/images/promo4.jpg",
    "/images/promo5.jpg",
    "/images/promo6.jpg",
    "/images/promo7.jpg",
    "/images/promo8.jpg",
    "/images/promo9.jpg",
    "/images/promo10.jpg",
    "/images/promo11.jpg",
    "/images/result3.jpg",
  ],
  results: [
    "/images/result4.jpg",
    "/images/result5.jpg",
    "/images/result6.jpg",
    "/images/result7.jpg",
    "/images/result8.jpg",
    "/images/result9.jpg",
    "/images/result10.jpg",
  ],
};
  return (
  
    <>
      <style jsx global>{`
        *{margin:0;padding:0;box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto}
        body{background:#0f0f0f;color:white;overflow-x:hidden}
        section{padding:140px 8%}

        /* HERO */
        .hero{height:100vh;display:grid;grid-template-columns:1fr 1fr;align-items:center;padding:0 8%;position:relative}
        .glow-bg{position:absolute;width:800px;height:800px;background:radial-gradient(circle,#ff00cc55,transparent 60%);filter:blur(120px);top:-200px;right:-200px}
        .text-section h1{font-size:70px;font-weight:800}
        .text-section h1 span{color:#ff00cc}
        .text-section p{margin-top:20px;font-size:20px;color:#bbb;max-width:500px}
        .buttons{margin-top:40px;display:flex;gap:20px}
        .btn{padding:14px 28px;border-radius:10px;text-decoration:none}
        .primary{background:linear-gradient(45deg,#ff00cc,#3333ff);color:white}
        .outline{border:1px solid #888;color:white}

        .image-wrapper{width:420px;border-radius:30px;overflow:hidden;box-shadow:0 40px 80px #000;position:relative}
        .image-wrapper::before{content:"";position:absolute;inset:-4px;border-radius:34px;background:linear-gradient(45deg,#ff00cc,#3333ff,#00ffee);z-index:-1;animation:spin 6s linear infinite}
        @keyframes spin{100%{transform:rotate(360deg)}}

        /* ===== EXPERIENCE PREMIUM ===== */
        .experience-wrap{
          background: radial-gradient(circle at 20% 20%, #1a1a1a, #0d0d0d 60%);
          position: relative;
        }

        .exp-title{
          font-size:64px;
          font-weight:800;
          margin-bottom:120px;
          background:linear-gradient(90deg,#ff00cc,#00ffee);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .exp-stack{
          display:flex;
          flex-direction:column;
          gap:140px;
        }

        .exp-card{
          position:sticky;
          top:120px;
          backdrop-filter:blur(20px);
          background:rgba(255,255,255,0.05);
          border-radius:30px;
          padding:60px;
          border:1px solid rgba(255,255,255,0.1);
          box-shadow:0 40px 80px rgba(0,0,0,0.6);
          transition:0.4s ease;
        }

        .exp-card:hover{
          transform:translateY(-10px) scale(1.02);
          border:1px solid #ff00cc;
        }

        .exp-date{
          color:#ff00cc;
          font-weight:700;
          margin-bottom:10px;
        }

        .exp-role{
          font-size:32px;
          font-weight:700;
        }

        .exp-company{
          color:#00ffee;
          margin:8px 0 20px;
          font-size:20px;
        }

        .exp-desc{
          color:#cfcfcf;
          line-height:1.8;
          font-size:18px;
        }

        /* SKILLS */
        .skills-section{background:#111}
        .skills-heading{font-size:60px;margin-bottom:80px;background:linear-gradient(90deg,#ff00cc,#00ffee);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
        .skills-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px}
        .skill-card{background:#161616;padding:30px;border-radius:20px}
        .progress{height:12px;background:#222;border-radius:20px;overflow:hidden;margin-top:10px}
        .progress-fill{height:100%;background:linear-gradient(90deg,#ff7a00,#ff00cc)}

        .tools{margin-top:80px;display:flex;flex-wrap:wrap;gap:20px}
        .tool{padding:12px 26px;border-radius:30px;background:#1c1c1c;border:1px solid #333}

        /* GALLERY */
.gallery{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
  margin-top:80px;
}

.gallery .img-work{
  width:100%;
  height:520px;
  border-radius:20px;
  transition:.4s;
  display:block;
}

.gallery .img-promotions{
  width:100%;
  height:620px;
  border-radius:20px;
  transition:.4s;
  display:block;
}

.gallery .img-results{
  width:100%;
  height:420px;
  border-radius:20px;
  transition:.4s;
  display:block;
}

.gallery img{
  width:100%;
  height:auto;
  border-radius:20px;
  transition:.4s;
  display:block;
}
.gallery img:hover{
  transform:scale(1.08);
  z-index:10;
}
 
/*
/* GALLERY */
        .gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:80px}
        .gallery img{width:100%;border-radius:20px;transition:.4s}
        .gallery img:hover{transform:scale(1.3);z-index:10}
*/

        /* CONTACT */
        /* CONTACT / FOOTER (PREMIUM UPGRADE) */
.footer{
  text-align:center;
  padding:140px 8%;
  background: radial-gradient(circle at top, #1a1a1a, #0b0b0b 70%);
  position: relative;
  overflow: hidden;
}

.footer::before{
  content:"";
  position:absolute;
  width:600px;
  height:600px;
  background:radial-gradient(circle,#ff00cc33,transparent 60%);
  top:-200px;
  left:50%;
  transform:translateX(-50%);
  filter:blur(100px);
  z-index:0;
}

.footer h2{
  font-size:64px;
  font-weight:800;
  margin-bottom:20px;
  background:linear-gradient(90deg,#ff00cc,#00ffee);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  position:relative;
  z-index:1;
}

.footer p{
  font-size:18px;
  color:#cfcfcf;
  margin:10px 0;
  letter-spacing:0.5px;
  position:relative;
  z-index:1;
  transition:0.3s ease;
}

.footer p:hover{
  color:#ffffff;
  transform:translateY(-2px);
}

/* PREMIUM FOOTER EXTENSION */

.premium-footer{
  position:relative;
  overflow:hidden;
}

/* glowing gradient orb */
.footer-glow{
  position:absolute;
  width:500px;
  height:500px;
  background:radial-gradient(circle,#ff00cc55,transparent 70%);
  top:-150px;
  left:50%;
  transform:translateX(-50%);
  filter:blur(120px);
  z-index:0;
}

/* subtitle */
.footer-sub{
  margin-top:10px;
  margin-bottom:60px;
  color:#aaa;
  font-size:18px;
  position:relative;
  z-index:1;
}

/* grid layout */
.contact-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:25px;
  max-width:900px;
  margin:0 auto;
  position:relative;
  z-index:1;
}

/* cards */
.contact-box{
  padding:28px 30px;
  border-radius:18px;
  background:rgba(255,255,255,0.05);
  border:1px solid rgba(255,255,255,0.08);
  backdrop-filter:blur(12px);
  transition:0.35s ease;
  text-align:left;
}

.contact-box:hover{
  transform:translateY(-8px) scale(1.02);
  border:1px solid #ff00cc;
  box-shadow:0 20px 40px rgba(0,0,0,0.5);
}

/* labels */
.contact-box span{
  display:block;
  font-size:13px;
  color:#888;
  margin-bottom:8px;
  letter-spacing:1px;
}

/* links */
.contact-box a{
  color:#00ffee;
  text-decoration:none;
  font-size:17px;
  word-break:break-word;
}

.contact-box a:hover{
  text-decoration:underline;
}

/* text */
.contact-box p{
  font-size:17px;
  margin:0;
  color:#ddd;
}

/* signature */
.footer-sign{
  margin-top:80px;
  font-style:italic;
  color:#aaa;
  font-size:18px;
  opacity:0.8;
  position:relative;
  z-index:1;
}

/* mobile */
@media(max-width:900px){
  .contact-grid{
    grid-template-columns:1fr;
  }
}

/* TESTIMONIALS PREMIUM */

.testimonials{
  padding:140px 8%;
  position:relative;
  background: radial-gradient(circle at 20% 10%, #1a1a1a, #0b0b0b 70%);
  overflow:hidden;
}

/* glow background */
.testi-glow{
  position:absolute;
  width:600px;
  height:600px;
  background:radial-gradient(circle,#ff7a0055,transparent 70%);
  top:-200px;
  right:-100px;
  filter:blur(120px);
}

/* title */
.testi-title{
  font-size:60px;
  font-weight:800;
  margin-bottom:80px;
  background:linear-gradient(90deg,#ff7a00,#ff00cc);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* grid */
.testi-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:30px;
}

/* card */
.testi-card{
  position:relative;
  padding:40px 30px;
  border-radius:20px;
  background:rgba(255,255,255,0.04);
  backdrop-filter:blur(14px);
  border:1px solid rgba(255,255,255,0.08);
  transition:0.4s ease;
  min-height:320px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
}

/* hover effect */
.testi-card:hover{
  transform:translateY(-12px) scale(1.02);
  border:1px solid #ff7a00;
  box-shadow:0 30px 60px rgba(0,0,0,0.6);
}

/* quote */
.quote-mark{
  font-size:60px;
  color:#ff7a00;
  opacity:0.4;
}

/* text */
.testi-text{
  font-size:18px;
  color:#ddd;
  line-height:1.8;
  margin:20px 0 30px;
}

/* footer */
.testi-footer .line{
  height:3px;
  width:100%;
  background:linear-gradient(90deg,#ff7a00,#ff00cc);
  margin-bottom:15px;
  opacity:0.6;
}

.testi-footer h4{
  margin:0;
  font-size:18px;
  font-weight:700;
}

.testi-footer span{
  font-size:14px;
  color:#aaa;
}

/* mobile */
@media(max-width:900px){
  .testi-grid{
    grid-template-columns:1fr;
  }

  .testi-title{
    font-size:40px;
  }
}
  
        @media(max-width:900px){
          .hero{grid-template-columns:1fr;height:auto;text-align:center;padding-top:100px}
          .skills-grid{grid-template-columns:1fr}
          .gallery{grid-template-columns:1fr}
        }
      `}</style>

      {/* HERO */}
      <div className="hero">
        <div className="glow-bg"></div>
        <div className="text-section">
          <h1>Hi, I'm <span>Nikita Giri</span></h1>
          <p>Senior Digital Marketing Executive who turns content into brand growth stories.</p>
          <div className="buttons">
            <a href="#experience" className="btn primary">Experience</a>
            <a href="#contact" className="btn outline">Contact</a>
          </div>
        </div>
        <div className="image-wrapper">
          <img src="/images/profile-pic2.png" />
        </div>
      </div>

      {/* EXPERIENCE */}
      <section id="experience" className="experience-wrap">
        <div className="exp-title">Experience</div>

        <div className="exp-card">
          <div className="exp-date">March 2025 – Present</div>
          <div className="exp-role">Senior Digital Marketing Executive</div>
          <div className="exp-company">The Galleria Mall • Brookfield Properties</div>
          <div className="exp-desc">
            Grew Instagram from 13K to 30K+, improved ROI by 40%, and increased mall footfall by 30% through campaigns and influencers.
          </div>
        </div>

        <div className="exp-card">
          <div className="exp-date">April 2024 – October 2024</div>
          <div className="exp-role">Social Media Assistant</div>
          <div className="exp-company">Awesome Analytics</div>
          <div className="exp-desc">
            Increased engagement by 35%, improved website traffic, and automated reporting workflows.
          </div>
        </div>

        <div className="exp-card">
          <div className="exp-date">July 2023 – April 2024</div>
          <div className="exp-role">Social Media Manager</div>
          <div className="exp-company">Think Digital</div>
          <div className="exp-desc">
            Managed Meta & Google ads, improved conversions by 30%, and maintained content strategy for multiple brands.
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills-section">
        <div className="skills-heading">Skills & Expertise</div>

        <div className="skills-grid">
          {[
            ["Social Media Management", "90%"],
            ["Digital Marketing", "85%"],
            ["Meta Ads / Google Ads", "80%"],
            ["Influencer Marketing", "80%"],
            ["Content Creation", "82%"],
            ["Copywriting", "75%"],
          ].map(([title, width]) => (
            <div className="skill-card" key={title}>
              {title}
              <div className="progress">
                <div className="progress-fill" style={{width}}></div>
              </div>
            </div>
          ))}
        </div>

        <div style={{marginTop:"80px"}}>
  <h3 style={{
    fontSize:"28px",
    marginBottom:"24px",
    fontWeight:700,
    letterSpacing:"1px",
    color:"#ffffffcc"
  }}>
    Tools I Use
  </h3>

  <div className="tools">
    {["Meta Ads Manager","Instagram","Google Analytics","Cloud AI","Notion","Photoshop"].map(t=>(
      <div className="tool" key={t}>{t}</div>
    ))}
  </div>
</div>
      </section>

{/* WORK GALLERY */}
<section>
  <h2 style={{
    fontSize: "60px",
    marginBottom: "40px",
    fontWeight: 800,
    background: "linear-gradient(90deg,#ff00cc,#00ffee)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }}>
    Work Gallery
  </h2>

  {/* CARDS */}
  <div style={{
    display: "flex",
    gap: "20px",
    marginBottom: "50px",
    flexWrap: "wrap"
  }}>
    {tabs.map((item) => (
      <div
        key={item.key}
        onClick={() => setActiveTab(item.key)}
        style={{
          padding: "20px 30px",
          borderRadius: "20px",
          cursor: "pointer",
          background: activeTab === item.key
            ? "linear-gradient(45deg,#ff00cc,#3333ff)"
            : "#161616",
          border: "1px solid #333",
          color: "white",
          fontWeight: 600,
          transition: "0.3s"
        }}
      >
        {item.label}
      </div>
    ))}
  </div>

  {/* GALLERY */}
  <div className="gallery">
  {galleryData[activeTab].map((img, i) => (
    <a
      key={i}
      href={galleryLinks[activeTab][i] || "#"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={img}
        className={
          activeTab === "projects"
            ? "img-work"
            : activeTab === "promotions"
            ? "img-promotions"
            : activeTab === "results"
            ? "img-results"
            : ""
        }
      />
    </a>
  ))}
</div>

<section className="testimonials">
  <div className="testi-glow"></div>

  <h2 className="testi-title">What People Say</h2>

  <div className="testi-grid">

    {[
      {
        text: "Working under Nikita, I can confidently say she is an exceptional marketer and brand strategist.",
        name: "Sandeep N",
        role: "Radio One | Fever FM"
      },
      {
        text: "Nikita has a remarkable ability to translate brand vision into measurable results. Highly recommended!",
        name: "Dhiraj Bhalla",
        role: "Times Group"
      },
      {
        text: "Her strategic thinking and creative execution set her apart from other marketers I've worked with.",
        name: "Saili Sawant",
        role: "Product Marketing Associate • Boldsubtitle"
      }
    ].map((t, i) => (
      <div className="testi-card" key={i}>
        <div className="quote-mark">“</div>

        <p className="testi-text">{t.text}</p>

        <div className="testi-footer">
          <div className="line"></div>
          <h4>{t.name}</h4>
          <span>{t.role}</span>
        </div>
      </div>
    ))}

  </div>
</section>



</section>
<section id="contact" className="footer premium-footer">
  <div className="footer-glow"></div>

  <h2>Let’s Work Together</h2>

  <p className="footer-sub">
    Open to freelance projects, collaborations & full-time roles.
  </p>

  <div className="contact-grid">

    <div className="contact-box">
      <span>Email</span>
      <a href="mailto:girinicky59@gmail.com">
        girinicky59@gmail.com
      </a>
    </div>

    <div className="contact-box">
      <span>WhatsApp</span>
      <p>8144926206 / 8144733855</p>
    </div>

    <div className="contact-box">
      <span>LinkedIn</span>
      <a href="https://linkedin.com/in/nikita-giri-01118524a" target="_blank">
        linkedin.com/in/nikita-giri-01118524a
      </a>
    </div>

    <div className="contact-box">
      <span>Instagram</span>
      <a href="https://www.instagram.com/its_me__nickky__/" target="_blank">
        instagram.com/its_me__nickky_
      </a>
    </div>

  </div>
</section>
    </>
  );
}