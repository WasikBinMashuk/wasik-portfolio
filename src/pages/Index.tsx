import React, { useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Menu, X, Download, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/contexts/ThemeContext';
import ProfileAvatar from '@/components/ProfileAvatar';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const skills = [
    'Laravel', 'PHP', 'MySQL', 'REST APIs',
    'JavaScript', 'jQuery', 'MSSQL', 'Git',
    'React', 'HTML', 'CSS', 'Tailwind CSS',
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with Laravel and MySQL. Features include user authentication and admin dashboard.',
      technologies: ['Laravel', 'MySQL', 'Bootstrap', 'CSS'],
      // image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      image: `${import.meta.env.BASE_URL}/ecommerce.png`,
      link: '#',
      github: 'https://github.com/WasikBinMashuk/DailyShop-eCommerce-laravel-10'
    },
    {
      id: 2,
      title: 'POS system',
      description: 'Full stack POS system using Laravel and MySQL. Includes features like sales tracking, inventory management, and user roles.',
      technologies: ['Laravel', 'MySQL', 'JavaScript','Bootstrap', 'CSS'],
      // image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      image: `${import.meta.env.BASE_URL}/pos.png`,
      link: '#',
      github: 'https://github.com/WasikBinMashuk/DailyPOS'
    },
    {
      id: 3,
      title: 'Data Analytics Dashboard',
      description: 'Created APIs for a data analytics dashboard using Laravel and MySQL. Includes user authentication and data visualization features.',
      technologies: ['Laravel', 'MySQL'],
      // image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      image: `${import.meta.env.BASE_URL}/data-analysis.png`,
      link: '#',
      github: '#'
    }
  ];

  const services = [
    {
      title: 'Backend Development',
      description: 'Building robust server-side applications with Laravel and database management systems.',
      icon: '⚙️',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'API Development',
      description: 'Designing and implementing RESTful APIs for seamless data integration.',
      icon: '🔗',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces using HTML, CSS, Bootstrap and Tailwind CSS.',
      icon: '🎨',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Full Stack Solutions',
      description: 'End-to-end web application development with Laravel',
      icon: '🚀',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 text-foreground transition-all duration-500">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-xl z-50 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-black bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-pulse">
              Wasik<span className="text-muted-foreground">.</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="relative text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text transition-all duration-300 font-semibold group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#about" className="relative text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text transition-all duration-300 font-semibold group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#services" className="relative text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text transition-all duration-300 font-semibold group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#projects" className="relative text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text transition-all duration-300 font-semibold group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="relative text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text transition-all duration-300 font-semibold group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="ml-4 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-border/50 mt-4 animate-fade-in">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#home" className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text transition-all duration-300 py-2 font-semibold">Home</a>
                <a href="#about" className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text transition-all duration-300 py-2 font-semibold">About</a>
                <a href="#services" className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text transition-all duration-300 py-2 font-semibold">Services</a>
                <a href="#projects" className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text transition-all duration-300 py-2 font-semibold">Projects</a>
                <a href="#contact" className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text transition-all duration-300 py-2 font-semibold">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-fade-in">
            {/* <div className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-transparent bg-clip-text border border-purple-500/20 mb-6 font-semibold animate-pulse">
              👋 Welcome to my portfolio
            </div> */}
            <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-pulse">Wasik</span>
            </h1>
            <h2 className="text-2xl md:text-4xl bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-6 font-bold">
              Junior Laravel Developer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              I'm a passionate Full Stack Developer with 2+ years of experience building
              scalable web applications and innovative software solutions. I love turning
              complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Button> */}
              <a href={`${import.meta.env.BASE_URL}/WasikCV.pdf`} download>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </a>
              {/* <Button size="lg" variant="outline" className="border-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 font-semibold transform hover:scale-105 transition-all duration-300">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button> */}
            </div>
            <div className="flex items-center space-x-6">
              <a href="https://www.linkedin.com/in/wasik-bin-mashuk-pronoy/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text transition-all duration-300 transform hover:scale-125">
                <Linkedin size={28} />
              </a>
              <a href="https://github.com/WasikBinMashuk" target="_blank" className="text-muted-foreground hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text transition-all duration-300 transform hover:scale-125">
                <Github size={28} />
              </a>
              {/* <a href="#" className="text-muted-foreground hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text transition-all duration-300 transform hover:scale-125">
                <Mail size={28} />
              </a> */}
              <a href="mailto:haquepronoy@email.com" className="text-muted-foreground hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text transition-all duration-300 transform hover:scale-125">
                <Mail size={28} />
              </a>
            </div>
          </div>

          <div className="relative animate-scale-in">
            {/* <ProfileAvatar size="xl" showUpload={true} /> */}
            <ProfileAvatar size="xl" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-black mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Get to know more about me, my skills, and my passion for creating amazing digital experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">My Story</h3>
              <p className="text-foreground mb-6 leading-relaxed">
              I'm a passionate Junior Laravel Developer with 2 years of hands-on experience in building web applications and contributing to backend systems. My journey into software development began with a strong curiosity about how websites and apps are built, which soon turned into a career path I'm genuinely excited about.
              </p>
              <p className="text-foreground mb-6 leading-relaxed">
              I'm constantly looking to improve my skills and stay updated with new tools and techniques in the Laravel ecosystem and beyond. I enjoy taking on new challenges that help me grow, and I’m motivated by the opportunity to build efficient, user-friendly, and scalable applications.
              </p>
              <div className="flex items-center space-x-6 text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-purple-500" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-pink-500" />
                  <span>Available for hire</span>
                </div>
              </div>
            </div>

            <div className="animate-slide-up delay-300">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Skills & Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div key={skill} className="bg-card/50 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 border border-border/50 hover:border-purple-500/30 transform hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <span className="text-sm text-foreground font-semibold">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-black mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              I offer a range of services to help bring your digital ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:border-transparent hover:shadow-2xl transition-all duration-500 group bg-card/50 backdrop-blur-sm border-border/50 relative overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <CardHeader className="text-center relative z-10">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <CardTitle className={`group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${service.gradient} group-hover:bg-clip-text transition-all duration-300 font-bold`}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Here are some of my recent projects that showcase my skills and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="hover:border-transparent hover:shadow-2xl transition-all duration-500 group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 animate-scale-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300 font-bold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-purple-500/30 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    {/* <Button size="sm" variant="outline" className="flex-1 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 font-semibold">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button> */}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" variant="outline" className="w-full hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 transition-all duration-300  font-semibold">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-fade-in">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities.
            Let's discuss how we can bring your ideas to life.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group animate-scale-in">
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300 transform group-hover:scale-110">
                <Mail className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">Email</h3>
              <p className="text-muted-foreground">haquepronoy@gmail.com</p>
            </div>

            <div className="text-center group animate-scale-in delay-200">
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-300 transform group-hover:scale-110">
                <Phone className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all duration-300">Phone</h3>
              <p className="text-muted-foreground">+8801685010517</p>
            </div>

            <div className="text-center group animate-scale-in delay-400">
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-orange-500/20 group-hover:to-red-500/20 transition-all duration-300 transform group-hover:scale-110">
                <MapPin className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 group-hover:bg-clip-text transition-all duration-300">Location</h3>
              <p className="text-muted-foreground">Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
            <a href="https://www.linkedin.com/in/wasik-bin-mashuk-pronoy/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Button>
            </a>
            <a href="https://github.com/WasikBinMashuk" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 font-semibold transform hover:scale-105 transition-all duration-300">
                <Github className="mr-2 h-5 w-5" />
                View GitHub
              </Button>
            </a>
            <a href="mailto:haquepronoy@email.com" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10 font-semibold transform hover:scale-105 transition-all duration-300">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
            </a>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border/50 bg-gradient-to-r from-background to-muted/20">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p className="font-semibold">&copy; 2025 Wasik Bin Mashuk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
