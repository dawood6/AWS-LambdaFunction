#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsPrac2Stack } from '../lib/aws-prac2-stack';

const app = new cdk.App();
new AwsPrac2Stack(app, 'AwsPrac2Stack');
