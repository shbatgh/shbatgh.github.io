---
layout: page
title: "BioVision: 4D cell reconstruction"
description: "Microscopy segmentation, tracking, mesh reconstruction, and quantitative analysis of stem-cell behavior in living tissue."
importance: 4
category: research
---

BioVision converts 2D confocal time-lapse stacks into 4D cell reconstructions: segmented cells, tracked identities, 3D meshes, and quantitative single-cell features over time. I built the core Python/PyTorch pipeline around human-in-the-loop segmentation, Cellpose masks, slice/time matching, mesh generation, cell identity annotation, and exports for downstream analysis.

The project was selected as a Regeneron ISEF 2025 finalist. In collaboration with Columbia’s Kalderon Lab, we applied BioVision to live ex vivo Drosophila ovarioles to study how follicle stem cells and follicle cells organize around moving germline cysts. The reconstructions make it possible to measure volume, surface area, sphericity, velocity, trajectories, and contact geometry instead of relying only on visual inspection.

One biological result is that follicle cells do not behave like rigid passengers attached to a cyst. They move along cyst surfaces, divide with transient nuclear displacement away from the basement membrane, and often return in non-adjacent positions. That supports a model where organization emerges from local cell-cell interactions around cysts whose shapes and positions are changing continuously.

I also built unsupervised clustering and tracking modules to group cells by morphology and movement dynamics. The useful output is not just a pretty render; it is a structured 4D dataset that can support trajectory clustering, fate classification, and predictive models for stem-cell behavior.

**Tools:** Python, PyTorch, Cellpose, NumPy, clustering/tracking, 3D mesh reconstruction, microscopy visualization.
