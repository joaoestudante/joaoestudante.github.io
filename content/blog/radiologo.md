+++
title = "Building Radiólogo: a radio platform"
date = 2022-04-25
description = "How my university's radio station was massively improved with a web-app."
+++

To the surprise of many people, the university I've graduated from has a student-run Radio. Sure, the emission is 100%
online (FM licenses are expensive), but it runs 24/7! Most of the time.

The Radio has two main goals: broadcast lesser known musical artists, and be a place where students could produce podcasts.
The HQ was a small, soundproof studio in the basement of a building where anyone could sign up to record something.

I found this concept pretty interesting, so I joined the Radio's technical and logistic team somewhere in my second year.
In total, the Radio must've had around 8 people managing it, distributed between 3 or 4 teams. We discussed what kind of
help I could offer, and pretty quickly a consensus was reached: the process for submitting and managing podcasts had to
be modernized.

### How things were

Put simply, the process in place was incredibly manual and time-consuming. Podcast creators had to record their episode
up to 24 hours before it aired, and it had to fulfill some strict duration, quality, and compression criteria. The episode
would be sent to our administrator, Manuel (poor guy), who then confirmed if the criteria was fulfilled or not. If it was,
then the episode would be properly named and transferred by FTP to our emission server. If not, then Manuel would e-mail
back the podcast creator requesting some changes. Manuel would also remind the creators that their episode was late, if
there were less than 24 hours to the episode airing.

Phew. This task was not only boring, but could take upwards of *4 hours* to complete! A complete waste of time.  What 
Manuel did could essentially be split up in two concrete tasks: ensure that the episode fulfilled our criteria; receive and
send the file itself. The rest is a variation of this. If both tasks could be done by a computer, then he would have
time to do more important things like managing the Radio (or sleeping, God knows he needed it).