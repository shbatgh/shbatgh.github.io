---
layout: page
title: "PertFlow: generative perturbation prediction"
description: "Single-cell perturbation prediction with protein-language-model embeddings, optimal-transport pairing, and flow-matching heads."
importance: 1
category: research
---

*Wei Li Lab, University of Maryland Institute for Health Computing. Started November 2025; continuing full-time through summer 2026.*

PertFlow is a compact research prototype for predicting how a cell’s RNA expression changes under a target genetic perturbation. The input is a control or wildtype expression profile plus a perturbation identity; the output is a predicted perturbed expression state.

The model encodes the source cell, conditions on a cached ESMC protein-language-model embedding of the perturbed gene, and builds source→target training pairs with cell-type-restricted Sinkhorn optimal transport. I implemented deterministic MLP decoders and flow-matching heads, including direct rectified flow and a SelfFlow-style variant, so the model can learn a vector field from control to perturbed expression rather than only a point estimate.

The evaluation code compares SelfFlow, direct flow, MLP decoders, latent-space OT, expression-space OT, and zeroed perturbation embeddings on in-distribution and out-of-distribution perturbation splits. Metrics include pairwise MSE/MAE/Pearson, MMD, and cell-mean MAE. The point is not to claim a finished benchmark; it is to make the pairing assumptions, ablations, and failure modes explicit enough to improve the model honestly.

**Tools:** PyTorch, AnnData/H5AD, Scanpy-style preprocessing, POT/Sinkhorn OT, ESMC embeddings, rectified flow / flow matching.
