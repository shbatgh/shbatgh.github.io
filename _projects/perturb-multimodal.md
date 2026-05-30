---
layout: page
title: "Perturb-Multimodal benchmarks"
description: "Cell-ID matching, supervised baselines, and image-cache infrastructure for paired MERFISH + microscopy perturbation data."
importance: 3
category: research
---

*Wei Li Lab, University of Maryland Institute for Health Computing. Started November 2025; continuing full-time through summer 2026.*

Perturb-Multimodal is a mouse-liver CRISPR perturbation dataset with whole-transcriptome scRNA-seq, targeted spatial MERFISH, and 18-channel microscopy crops. I worked on turning the local data into reliable ML tasks: documenting the file semantics, matching image crops to MERFISH rows by exact cell ID, and avoiding the common mistake of treating scRNA-seq cells as one-to-one image pairs.

The pairing rule matters. MERFISH rows and microscopy crops describe the same segmented cells; the scRNA-seq arm is a related whole-transcriptome distribution, not same-cell ground truth for the images. That distinction controls what can be used as a supervised target, what is only weakly aligned, and what claims would be overreach.

I implemented a held-out-batch benchmark for predicting `singlet_gene` perturbation labels from metadata, MERFISH expression, images, and image+MERFISH fusion, with shuffled and negative-control baselines. On confident hepatocyte singlets, the multiclass perturbation task is close to chance under realistic splits. That negative result is useful: it forces sanity-check tasks such as image→cell type, image→cluster type, and image→MERFISH prediction before building larger generative models.

I also built a sharded zstd-compressed image cache for roughly 2.2M MERFISH-matched crops, preserving string cell IDs and supporting lazy PyTorch loading. The goal was simple: stop millions of tiny `.npz` files from dominating training time.

**Tools:** AnnData/H5AD, PyTorch datasets, MERFISH, 18-channel microscopy tensors, held-out-batch evaluation, zstd-sharded image caching.
